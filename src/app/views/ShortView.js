const render = ({
  id,
  shortLink,
  status,
  clickCnt,
  createTs,
  code,
  comment,
}) => ({
  id,
  shortLink,
  status,
  clickCnt,
  createTs,
  code,
  comment,
});

const renderMany = (shorts) => shorts.map((short) => render(short));

export { render, renderMany };
