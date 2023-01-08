import Mail from "../lib/Mail";

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Teste de fila <test@test.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Testando envio de emails',
      html: `Olá, ${user.name}, bem-vindo ao sistema de aprendizado de filas em nodejs :D :D`
    })
  }
}