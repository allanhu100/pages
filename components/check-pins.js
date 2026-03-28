export default function handler(req, res) {
  const { pin } = req.body;
  if (pin === process.env.GUEST_PIN) {
    return res.status(200).json({ ok: true });
  }
  return res.status(401).json({ ok: false });
}
