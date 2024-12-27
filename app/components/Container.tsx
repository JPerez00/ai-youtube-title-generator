import clsx from 'clsx'

export default function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('max-w-5xl lg:mx-auto w-full', className)}
      {...props}
    />
  )
}
