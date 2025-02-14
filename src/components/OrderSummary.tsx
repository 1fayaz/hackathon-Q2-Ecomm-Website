"use client"

import { useCart } from "@/app/Context/CartContext"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OrderSummary() {
  const { cart } = useCart()

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  return (
    <Card className="w-full bg-white">
      <CardHeader className="px-6">
        <CardTitle className="text-lg font-semibold text-center lg:text-left">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Delivery/Shipping</span>
            <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
          </div>
          <div className="flex justify-between font-semibold border-t pt-4">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-sm font-semibold">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.productName}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">{item.productName}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                <p className="text-sm">₹{item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

