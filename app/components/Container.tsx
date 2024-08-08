import clsx from 'clsx'

export default function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('max-w-2xl lg:mx-auto', className)}
      {...props}
    />
  )
}
