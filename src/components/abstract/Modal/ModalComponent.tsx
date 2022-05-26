import classNames from 'classnames'
import { ReactNode } from 'react'
import { RootPortal } from '../../headless/RootPortal'

type Props = {
  onClose: () => void
  children?: ReactNode
  actionAreaContent?: ReactNode
}
export const ModalComponent = ({
  children,
  onClose,
  actionAreaContent,
}: Props) => {
  return (
    <RootPortal>
      <div className="modal modal-open">
        <div className={classNames(['fixed', 'inset-0'])} onClick={onClose} />
        <div className="modal-box max-w-2xl">
          {children}
          {actionAreaContent !== undefined && (
            <div className="modal-action">{actionAreaContent}</div>
          )}
        </div>
      </div>
    </RootPortal>
  )
}
