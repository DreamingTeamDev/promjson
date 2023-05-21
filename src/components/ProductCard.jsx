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

        {product.Код_товара}
      </li>
      <li>
        <sup>Название_позиции:</sup>
        {product.Название_позиции}
      </li>
      <li>
        <sup>Название_позиции_укр:</sup>
        {product.Название_позиции_укр}
      </li>
      <li>
        <sup>Поисковые_запросы:</sup>
        {product.Поисковые_запросы}
      </li>
      <li>
        <sup>Поисковые_запросы_укр:</sup>
        {product.Поисковые_запросы_укр}
      </li>
      <li>
        <sup>Описание:</sup>
        <span dangerouslySetInnerHTML={{ __html: product.Описание }}></span>
      </li>
      <li>
        <sup>Описание_укр:</sup>
        <span dangerouslySetInnerHTML={{ __html: product.Описание_укр }}></span>
      </li>
      <li>
        <sup>Тип_товара:</sup>
        {product.Тип_товара}
      </li>

      <li>
        <sup>Цена:</sup>
        {product.Цена} {product.Валюта}
      </li>
      <li>
        <sup>Единица_измерения:</sup>
        {product.Единица_измерения}
      </li>
      <li>
        <sup>Минимальный_объем_заказа:</sup>
        {product.Минимальный_объем_заказа}
      </li>

      <li>
        <img
          src={product.Ссылка_изображения}
          alt={product.Название_позиции}
          width="300"
          height="300"
        />
      </li>
      <li>
        <sup>Наличие:</sup>
        {product.Наличие}
      </li>
      <li>
        <sup>Номер_группы:</sup>
        {product.Номер_группы}
      </li>
      <li>
        <sup>Название_группы:</sup>
        {product.Название_группы}
      </li>
      <li>
        <sup>Адрес_подраздела:</sup>
        {product.Адрес_подраздела}
      </li>
      <li>
        <sup>Уникальный_идентификатор:</sup>
        {product.Уникальный_идентификатор}
      </li>
      <li>
        <sup>Идентификатор_подраздела:</sup>
        {product.Идентификатор_подраздела}
      </li>
      <li>
        <sup>Страна_производитель:</sup>
        {product.Страна_производитель}
      </li>
      <li>
        <sup>Личные_заметки:</sup>
        {product.Личные_заметки}
      </li>
      <li>
        <sup>Продукт_на_сайте:</sup>
        {product.Продукт_на_сайте}
      </li>
      <li>
        <sup>Ярлык:</sup>
        {product.Ярлык}
      </li>
    </ul>
  );
};

export default ProductCard;
