import { rest } from 'msw';

const items = [
  { id: 1, name: "Yogurt", category: "Dairy", isInCart: false },
  { id: 2, name: "Pomegranate", category: "Produce", isInCart: false },
  { id: 3, name: "Lettuce", category: "Produce", isInCart: false },
];

export const handlers = [
  rest.get('http://localhost:3000/items', (req, res, ctx) => {
    return res(ctx.json(items));
  }),
  rest.post('http://localhost:3000/items', (req, res, ctx) => {
    const newItem = { ...req.body, id: Math.max(...items.map(i => i.id)) + 1 };
    items.push(newItem);
    return res(ctx.json(newItem));
  }),
  rest.patch('http://localhost:3000/items/:id', (req, res, ctx) => {
    const item = items.find(i => i.id === Number(req.params.id));
    Object.assign(item, req.body);
    return res(ctx.json(item));
  }),
  rest.delete('http://localhost:3000/items/:id', (req, res, ctx) => {
    const index = items.findIndex(i => i.id === Number(req.params.id));
    items.splice(index, 1);
    return res(ctx.status(200));
  }),
];

export const resetData = () => {
  items.splice(3); // Keep only the first 3 default items
  items.forEach(item => item.isInCart = false);
};