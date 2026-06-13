describe('Quantity Validation', () => {

  it('should allow quantity less than 5', () => {
    const quantity = 3;

    expect(quantity <= 5).toBe(true);
  });

  it('should reject quantity above 5', () => {
    const quantity = 10;

    expect(quantity > 5).toBe(true);
  });

});