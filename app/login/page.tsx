"use client"

import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../lib/store"
import { setName, clearName, resetName } from "../lib/features/profile/profileSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function ProfilePage() {
  const currentName = useSelector((state: RootState) => state.profile.name)

  const dispatch = useDispatch()

  // Local state for input field
  const [inputValue, setInputValue] = useState("")

  // Handle updating name with input value
  const handleSetName = () => {
    if (inputValue.trim()) {
      dispatch(setName(inputValue.trim()))
      setInputValue("")
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Redux Profile Manager</CardTitle>
            <CardDescription>Learn Redux Toolkit with a simple user profile example</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Display current name from Redux store */}
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Current Name:</p>
              <p className="text-lg font-semibold">{currentName}</p>
            </div>

            {/* Input to set new name */}
            <div className="flex gap-2">
              <Input
                placeholder="Enter new name..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSetName()}
              />
              <Button onClick={handleSetName}>Set Name</Button>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => dispatch(clearName())}>
                Clear Name
              </Button>
              <Button variant="outline" onClick={() => dispatch(resetName())}>
                Reset to Default
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
