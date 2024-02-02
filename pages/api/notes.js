import { fql } from "fauna";
import { adminClientX } from "utils/faunaClient";

const notes = async (req, res) => {
  const client =  adminClientX()
  const query = fql`Notes.all()`;
  const notes = await client.query(query);
  res.status(200).json({ notes: notes.data })
}
export default notes;