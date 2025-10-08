import { sendEmail } from '@/app/lib/mailer'
import { NextResponse } from 'next/server'

export async function POST(req) {
    try {
        const { email, subject, text } = await req.json()
        await sendEmail({ email, subject, text })
        return NextResponse.json({
            success: true,
            message: `Message successfully sent to admin from ${email}`
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: 'Internal server error'
        })
    }
}