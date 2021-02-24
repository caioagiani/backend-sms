export const render = ({
  id,
  shortLink,
  fullLink,
  status,
  clickCnt,
  createTs,
  code,
  comment,
}) => ({
  id,
  shortLink,
  fullLink,
  status,
  clickCnt,
  createTs,
  code,
  comment,
});

export const renderMany = (shorts) => {
  shorts.data.items.map((short) => render(short));
};
