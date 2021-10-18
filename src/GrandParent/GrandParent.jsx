import Parent from '../Parent/Parent'
import s from './grandparent.module.scss'

export default function GrandParent () {
  return <div className={s.grandParent}>
    GrandParent
    <Parent className={s.parentOverride} />
  </div>
}
