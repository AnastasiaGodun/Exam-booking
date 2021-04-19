const Table = require('../models/table.model');
const User = require('../models/user.model');

const takeExamen = async (req, res) => {
  const { tableId } = req.body;
  console.log('tableID>>>>>', req.body);
  console.log('UserID>>>>>>', req.session.user.id);
  await Table.findByIdAndUpdate(tableId, { $set: { examinator: req.session?.user?.id } });
  const table = await Table.findById(tableId).populate('examinator');
  //const tableRenew = await Table.findById(tableId)
  // const table = await Table.findById(tableId).populate('examinator');
  console.log('table>>>>>>', table);
  return res.status(200).json(table);
}


module.exports = {
  takeExamen
};
