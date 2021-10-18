import s from './child.module.scss'
import cn from 'classnames'

export default function Child ({className}) {
  return <div className={cn(s.child, className)}>Child</div>
}
