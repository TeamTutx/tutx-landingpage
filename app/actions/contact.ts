'use server';

export async function submitForm(data: FormData) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY; // Securely fetch secret

  if (!accessKey) {
    throw new Error('Access key is missing');
  }

  data.append('access_key', accessKey);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: data
  });

  const result = await response.json();

  return result;
}
