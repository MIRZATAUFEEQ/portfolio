'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/app/utils/animation'
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'


export default function Contact() {
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        text: ''
    })
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setStatus('loading')
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                toast.success('Message successfully sent to admin')
                setStatus('success')
                setFormData({
                    subject: '',
                    email: '',
                    text: ''
                })
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
            console.log("error in sending msg", error);
        }
    }

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="container max-w-7xl mx-auto py-12">
            <motion.h1
                className="text-4xl font-bold mb-8 text-center"
                {...fadeInUp}
            >
                Contact Me
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <motion.div
                    className="space-y-8"
                    {...slideInLeft}
                >
                    <motion.div {...fadeInUp}>
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-secondary">
                            I&apos;m always open to discussing new projects, creative ideas, or
                            opportunities to be part of your visions.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div
                            className="flex items-center gap-4"
                            variants={fadeInUp}
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaEnvelope className="h-6 w-6 text-primary" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <a href="mailto:dev.taufeeqmirza@gmail.com" className="text-secondary hover:text-primary">
                                    dev.taufeeqmirza@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-center gap-4"
                            variants={fadeInUp}
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaPhone className="h-6 w-6 text-primary" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <a href="tel:8112478534" className="text-secondary hover:text-primary">
                                    +91 8112478534
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-center gap-4"
                            variants={fadeInUp}
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaMapMarkerAlt className="h-6 w-6 text-primary" />
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-secondary">224203 Ayodhya Uttar Pradesh, India</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    {...slideInRight}
                >
                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div variants={fadeInUp}>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <label htmlFor="text" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="text"
                                name="text"
                                value={formData.text}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full btn btn-primary flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {status === 'loading' && (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            )}
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </motion.button>

                        {status === 'error' && (
                            <motion.p
                                className="text-red-500 text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Failed to send message. Please try again.
                            </motion.p>
                        )}
                    </motion.form>
                </motion.div>
            </div>
        </div>
    )
} 