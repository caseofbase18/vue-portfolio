import emailjs from 'emailjs-com';

const serviceID = 'service_aq3doi8';
const templateID = 'template_n480e32';
const userID = 'NdBKAbOFNPizJcYzR';

export default {
  sendEmail(params) {
    return new Promise((resolve, reject) => {
      emailjs.send(serviceID, templateID, params, userID)
        .then((result) => {
          console.log(result.text);
          resolve(result);
        }, (error) => {
          console.error(error.text);
          reject(error);
        });
    });
  }
}