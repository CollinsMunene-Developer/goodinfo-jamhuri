 "use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SidebarInput } from "@/components/ui/sidebar"

export function SidebarOptInForm() {
  const [email, setEmail] = useState<string>("") // State to store email
  const [statusMessage, setStatusMessage] = useState<string>("") // State to show feedback

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatusMessage("Please enter a valid email address.")
      return
    }

    try {
      // Example API call logic (replace with actual endpoint)
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatusMessage("Subscription successful! 🎉")
        setEmail("") // Clear the input
      } else {
        setStatusMessage("Subscription failed. Please try again.")
      }
    } catch (error) {
      console.error("Error subscribing:", error)
      setStatusMessage("An error occurred. Please try again later.")
    }
  }

  return (
    <Card className="shadow-none">
      <form onSubmit={handleSubscribe}>
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-sm">Subscribe to our newsletter</CardTitle>
          <CardDescription>
            Opt-in to receive updates and news about the sidebar.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          <SidebarInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
            size="sm"
            type="submit"
          >
            Subscribe
          </Button>
          {statusMessage && (
            <p className="text-sm mt-2 text-sidebar-primary">
              {statusMessage}
            </p>
          )}
        </CardContent>
      </form>
    </Card>
  )
}
