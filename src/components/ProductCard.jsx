import React from "react";

const ProductCard = ({ product }) => {
  return (
    <ul
      style={{
        width: 500,
        // border: "3px solid #ccc",
        padding: 10,
        margin: 10,
        borderRadius: 20,
        boxShadow:
          "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
      }}
    >
      <li>
        <sup>Код_товара:</sup>

        {product.product_code}
      </li>
      <li>
        <sup>Название_позиции:</sup>
        {product.position_name}
      </li>
      <li>
        <sup>Название_позиции_укр:</sup>
        {product.position_name_ukr}
      </li>
      <li>
        <sup>Поисковые_запросы:</sup>
        {product.search_queries}
      </li>
      <li>
        <sup>Поисковые_запросы_укр:</sup>
        {product.search_queries_ukr}
      </li>
      <li>
        <sup>Описание:</sup>
        <span dangerouslySetInnerHTML={{ __html: product.description }}></span>
      </li>
      <li>
        <sup>Описание_укр:</sup>
        <span
          dangerouslySetInnerHTML={{ __html: product.description_ukr }}
        ></span>
      </li>
      <li>
        <sup>Тип_товара:</sup>
        {product.item_type}
      </li>

      <li>
        <sup>Цена:</sup>
        {product.price} {product.currency}
      </li>
      <li>
        <sup>Единица_измерения:</sup>
        {product.unit_of_measurement}
      </li>
      <li>
        <sup>Минимальный_объем_заказа:</sup>
        {product.min_order_volume}
      </li>

      <li>
        <img
          src={product.image_link}
          alt={product.position_name_ukr}
          width="300"
          height="300"
        />
      </li>
      <li>
        <sup>Наличие:</sup>
        {product.availability}
      </li>
      <li>
        <sup>(Минимальный_заказ_опт):</sup>
        {product.min_wholesale_order}
      </li>
      <li>
        <sup>Название_группы:</sup>
        {product.group_name}
      </li>

      <li>
        <sup>Уникальный_идентификатор:</sup>
        {product.unique_id}
      </li>
      <li>
        <sup>Идентификатор_подраздела:</sup>
        {product.subcategory_id}
      </li>
      <li>
        <sup>Страна_производитель:</sup>
        {product.manufacturer_country}
      </li>
      <li>
        <sup>Личные_заметки:</sup>
        {product.personal_notes}
      </li>
      <li>
        <sup>Продукт_на_сайте:</sup>
        {product.on_website}
      </li>
      <li>
        <sup>Вид парфумерної продукції:</sup>
        {product.product_type}
      </li>
      <li>
        <sup>Тип аромата:</sup>
        {product.fragrance_type}
      </li>
      <li>
        <sup>Объем:</sup>
        {product.volume_value} {product.volume_unit}
      </li>
      <li>
        <sup>Класифікація:</sup>
        {product.classification}
      </li>
      <li>
        <sup>Рік випуску:</sup>
        {product.release_year}
      </li>
      <li>
        <sup>Країна виробник:</sup>
        {product.manufacturer_country}
      </li>
      <li>
        <sup>Виробник:</sup>
        {product.manufacturer}
      </li>
      <li>
        <sup>Нота сердца:</sup>
        {product.heart_note}
      </li>
      <li>
        <sup>Кінцева нота:</sup>
        {product.final_note}
      </li>
      <li>
        <sup>Тип аромата:</sup>
        {product.fragrance_type}
      </li>
      <li>
        <sup>Единица_измерения:</sup>
        {product.unit_of_measurement}
      </li>
      <li>
        <sup>Минимальный_объем_заказа:</sup>
        {product.min_order_volume}
      </li>
      <li>
        <sup>Оптовая_цена:</sup>
        {product.wholesale_price}
      </li>
      <li>
        <sup>Минимальный_заказ_опт:</sup>
        {product.min_wholesale_order}
      </li>
      <li>
        <sup>Количество:</sup>
        {product.quantity}
      </li>
      <li>
        <sup>Адрес_подраздела:</sup>
        {product.subcategory_address}
      </li>
    </ul>
  );
};

export default ProductCard;
