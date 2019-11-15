import gravatar from '../gravatar';

describe('Gravatar function', () => {
  it('Should return gravatar default url', () => {
    const email = 'xxx@xxx.com';
    const gravatarDefaultImage = 'https://gravatar.com/avatar/02a243c4202b23e8ec78620f1ff48aa6';
    expect(gravatar(email)).toEqual(gravatarDefaultImage);
  });
});
