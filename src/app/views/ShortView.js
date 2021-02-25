const render = ({
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

const renderMany = (shorts) => shorts.map((short) => render(short));

export { render, renderMany };
