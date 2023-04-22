'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Button from '../Button'

interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
  onSubmit?: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel?: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryActionLabel?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }
    setShowModal(false)
    setTimeout(() => {
      onClose?.()
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }
    onSubmit?.()
  }, [onSubmit, disabled])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return
    }
    secondaryAction()
  }, [secondaryAction, disabled])

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className="justify-center fixed items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full xs:w-4/6 sm:h-3/6 md:w-2/5 my-6 mx-auto h-full md:h-auto">
          {/* content */}
          <div
            className={`translate duration-300 h-full
                      ${showModal ? 'translate-y-0' : 'translate-y-full'}
                      ${showModal ? 'opacity-100' : 'opacity-0'} 
                  `}
          >
            <div className="translate h-full md:h-auto sm:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                >
                  <XMarkIcon className="" />
                </button>
                <div className="text-lg font-semibold">{title}</div>
                <div className="relative p-6 flex-auto">{body}</div>
                <div className="flex flex-col gap-2 p-6">
                  <div className="flex flex-row items-center gap-4 w-full">
                    {secondaryAction && secondaryActionLabel && (
                      <Button
                        outline
                        disabled={disabled}
                        label={secondaryActionLabel}
                        onClick={handleSecondaryAction}
                      />
                    )}
                    <Button
                      disabled={disabled}
                      label={actionLabel ? actionLabel : ''}
                      onClick={handleSubmit}
                    />
                  </div>
                  {footer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal