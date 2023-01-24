const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
    // console.log(process.env.HOST,"................")
	try {
		
		/*create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
		  host: "smtp.ethereal.email",
		  port: 587,
		  secure: true, // true for 465, false for other ports
		  auth: {
			user: testAccount.user, // generated ethereal user
			pass: testAccount.pass, // generated ethereal password
		  },
		});
		*/
		const transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			// secure: true, 
			auth: {
				user: 'melvina.champlin90@ethereal.email',
				pass: 'VZdQQkPnCDc5vAbMy9'
			}
		});
		

		// console.log(email)
		// console.log(text)
		// console.log(subject)

		await transporter.sendMail({
			
			from: "nikhilesh",
			to: email,
			subject: subject,
			text:text
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};