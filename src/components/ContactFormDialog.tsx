'use client'

import SendIcon from '@mui/icons-material/Send'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'

interface ContactFormDialogProps {
  open: boolean
  onClose: () => void
  onFormSubmitted: (message: string) => void
}

export const ContactFormDialog: React.FC<ContactFormDialogProps> = ({
  open,
  onClose,
  onFormSubmitted,
}) => {
  const [message, setMessage] = useState('')
  const onSendMessage = () => {
    onFormSubmitted(message)
    onClose()
    setMessage('')
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Get In Touch</DialogTitle>
      <DialogContent>
        <TextField
          sx={{ mt: 1 }}
          label='Message'
          multiline
          rows={5}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={onClose}>
          Close
        </Button>
        <Button
          variant='contained'
          onClick={onSendMessage}
          endIcon={<SendIcon />}
        >
          Send message
        </Button>
      </DialogActions>
    </Dialog>
  )
}
