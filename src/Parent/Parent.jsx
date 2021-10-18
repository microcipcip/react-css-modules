import Child from '../Child/Child'
import cn from 'classnames'
import s from './parent.module.scss'

export default function Parent ({className}) {
  return <div className={cn(s.parent, className)}>Parent
    <Child className={s.childOverride} />
  </div>
}
