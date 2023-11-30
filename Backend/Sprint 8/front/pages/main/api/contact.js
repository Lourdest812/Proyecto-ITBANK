import nodemailer from "nodemailer";
import React, { useState } from 'react'

export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;
  
  const user = process.env.user;
  
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.pass,
    },
  });
  
  try {
    const email = await transporter.sendMail({
      from: user,
      to: "lourdest812@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Mensaje: ${message}</p>`,
    });
    console.log("Mensaje enviado:", email.messageID);
  
    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se ha enviado el mensaje" });
  }

};