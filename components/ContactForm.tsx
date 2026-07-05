"use client"

import axios from "axios"
import { useState, type FormEvent } from "react"

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    const form = event.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const content = (form.elements.namedItem("content") as HTMLTextAreaElement).value

    const jsonBody = JSON.stringify({
      channel: "#info",
      username: "Inquiry",
      text: "お問い合わせが届きました",
      icon_emoji: ":ghost:",
      attachments: [
        {
          fields: [
            { title: "名前", value: name },
            { title: "メールアドレス", value: email },
            { title: "内容", value: content },
          ],
          footer: "Reload inquiry",
        },
      ],
    })

    await axios.post(process.env.NEXT_PUBLIC_SLACK_URL as string, jsonBody, {
      withCredentials: false,
    })

    setDone(true)
  }

  if (done) return <p id="done-message">送信完了</p>

  return (
    <form id="contact" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">お名前</label>
        <input id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="content">お問い合わせ内容</label>
        <textarea rows={5} required id="content" name="content" />
      </div>
      <div>
        <button type="submit" id="contact-submit" disabled={submitting}>
          {submitting ? "送信中..." : "送信"}
        </button>
      </div>
    </form>
  )
}
