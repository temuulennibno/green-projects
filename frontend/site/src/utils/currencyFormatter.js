/**
 *
 * Duriin too oroj irehed tuuniig 3 oronoor ni taslan
 * taslalaar zaaglaj shineer string uusgeh function
 * @param {number} rawValue
 * @returns {string} formatted number
 */
export default function currencyFormatter(rawValue) {
  return new Intl.NumberFormat('mn-MN', { currency: 'MNT', maximumFractionDigits: 0 }).format(rawValue);
}
