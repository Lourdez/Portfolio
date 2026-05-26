import { defineComponent, h, ref, onMounted, onUnmounted } from 'vue'

export const Reveal = defineComponent({
  name: 'Reveal',
  props: {
    delay: { type: Number, default: 0 },
  },
  setup(props, { slots, attrs }) {
    const el = ref(null)
    const visible = ref(false)
    let observer = null

    onMounted(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.value = true
            observer.disconnect()
          }
        },
        { rootMargin: '-60px' }
      )
      if (el.value) observer.observe(el.value)
    })

    onUnmounted(() => observer?.disconnect())

    return () =>
      h(
        'div',
        {
          ref: el,
          ...attrs,
          style: {
            opacity: visible.value ? 1 : 0,
            transform: visible.value
              ? 'translateY(0px) scale(1)'
              : 'translateY(48px) scale(0.97)',
            filter: visible.value ? 'blur(0px)' : 'blur(10px)',
            transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${props.delay * 0.12}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${props.delay * 0.12}s, filter 0.75s cubic-bezier(0.16,1,0.3,1) ${props.delay * 0.12}s`,
          },
        },
        slots.default?.()
      )
  },
})

export const SectionLabel = defineComponent({
  name: 'SectionLabel',
  setup(_, { slots }) {
    return () =>
      h(Reveal, null, {
        default: () =>
          h('div', { class: 'flex items-center gap-3 mb-4' }, [
            h('span', { class: 'w-8 h-px bg-accent' }),
            h(
              'span',
              { class: 'font-mono text-[0.7rem] font-bold text-accent uppercase tracking-[4px]' },
              slots.default?.()
            ),
          ]),
      })
  },
})

export const SectionTitle = defineComponent({
  name: 'SectionTitle',
  setup(_, { slots }) {
    return () =>
      h(Reveal, { delay: 1 }, {
        default: () =>
          h(
            'h2',
            {
              class: 'font-extrabold leading-[1.05] mb-14 text-text-primary',
              style: { fontSize: 'clamp(2.8rem, 6vw, 6rem)' },
            },
            slots.default?.()
          ),
      })
  },
})
