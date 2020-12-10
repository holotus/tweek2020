import { FC, useEffect, useState, useCallback } from 'react'
import { validate } from 'email-validator'
import { useUI } from '@components/ui/context'
import { WhatsAppQRCode, Logo, Button, Input } from '@components/ui'
import { SegmentHelper } from '@components/SegmentHelper'

interface Props {}

const ContactUs: FC<Props> = () => {
  // Form State
  const [phone, setPhone] = useState('')
  const [saved, setSaved] = useState(false)
  // const [email, setEmail] = useState('')
  // const [loading, setLoading] = useState(false)
  // const [message, setMessage] = useState('')
  // const [dirty, setDirty] = useState(false)
  // const [disabled, setDisabled] = useState(false)

  const { setModalView, closeModal } = useUI()

  const handleSetPhone = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()

    // if (!dirty && !disabled) {
    //   setDirty(true)
    //   handleValidation()
    // }
    SegmentHelper.PhoneIdentified(phone);

    setSaved(true)
  }

  // const handleValidation = useCallback(() => {
  //   // Unable to send form unless fields are valid.
  //   if (dirty) {
  //     setDisabled(!validate(email))
  //   }
  // }, [email, dirty])

  // useEffect(() => {
  //   handleValidation()
  // }, [handleValidation])

  return (
    <form
      onSubmit={handleSetPhone}
      className="w-80 flex flex-col justify-between p-3"
    >
      <div className="flex justify-center pb-12 ">
        <Logo width="64px" height="64px" />
      </div>

      {saved && (
        <>
          <span className="pt-3 text-center text-sm">
            <span className="text-accents-7">Scan to start the chat</span>
          </span>
          <WhatsAppQRCode width="296px" height="296px" />
        </>
      )}
      {!saved && (
        <div className="flex flex-col space-y-4">

          <span className="pt-3 text-center text-sm">
            <span className="text-accents-7">Contact us via WhatsApp</span>
          </span>


          <Input placeholder="WhatsApp number" onChange={setPhone} type="tel" />
          <div className="pt-2 w-full flex flex-col">
            <Button
              variant="slim"
              type="submit"
              // loading={loading}
              // disabled={disabled}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </form>
  )
}

export default ContactUs
