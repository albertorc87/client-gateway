export enum OrderStatus {
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
  DELIVERED = 'DELIVERED',
}

export const OrderStatusList = [
  OrderStatus.CANCELLED,
  OrderStatus.PENDING,
  OrderStatus.DELIVERED,
];
