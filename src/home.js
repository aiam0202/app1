import React from 'react'

export default function Home() { 
    return (
        <p style={{textAlign:'center'}}> 
        <h3>ยินดีต้อนรับ สู่ React Store</h3>
        รายชื่อ <a href="/products">สินค้า</a> ที่เรามีจาหน่าย
            <br/>แต่ท่านต้องเป็น <a href="/member">สมาชิก</a> จึงจะ
            สั่งซื้อได้<br/>
        หากมีข้อสงสัย กรุณา<a href="/products">ติดต่อเรา</a>
    </p>
) 
}
