// components/ExampleDialog.js
import { useState } from 'react'
import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import '@reach/dialog/styles.css'

export default function ExampleDialog(props) {
    const [showDialog, setShowDialog] = useState(false)
    const open = () => setShowDialog(true)
    const close = () => setShowDialog(false)

    return (
        <div>
            <button onClick={open}>Open Dialog</button>
            <Dialog isOpen={showDialog} onDismiss={close}>
                <button className="close-button bg-warning" onClick={close}>
                    <VisuallyHidden>Close</VisuallyHidden>
                    <span aria-hidden>×</span>
                </button>
                <button className='bg-danger'>
                    <VisuallyHidden>Save</VisuallyHidden>
                    <span aria-hidden>💾</span>
                </button>
                <p>Hello there. I am a dialog</p>
            </Dialog>
        </div>
    )
}