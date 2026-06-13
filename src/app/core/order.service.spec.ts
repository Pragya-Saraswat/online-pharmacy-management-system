import { TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderService);
  });

  it('should start with empty cart', () => {
    expect(service.cart().length).toBe(0);
  });
  it('should clear cart', () => {
    service.cart.set([
      {
        medicine: {
          id: '1',
          name: 'Paracetamol',
          price: 10,
        } as any,
        quantity: 2,
      },
    ]);

    service.clearCart();

    expect(service.cart().length).toBe(0);
  });
});
