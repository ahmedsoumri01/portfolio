"use client"

import React, { useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react'

export default function AdminProfile() {
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle the update logic here
    console.log('Update profile', { email, password })
  }

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-6">
        <img
          className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-blue-500"
          src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1"
          alt="Admin Avatar"
        />
        <h2 className="text-2xl font-bold text-gray-800">Admin Profile</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="password" value="New Password" />
          <TextInput
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          Update Profile
        </Button>
      </form>
    </div>
  )
}