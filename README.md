#littention

## 后端:

#### 数据库设计

个人Profile: 
- user_id: int
- avatar: String
- name: String
- age: int
- school: String
- photos: String
- decription: String
- room_id_list: list<int> 
- skin_id_list: list<String>

局Party:
- room_id: int
- member_num: int
- seat_list: list<String>
- time: String
- location: String
- cost: float
- description: String
- type: String

座位Seat: 
- seat_seq: int
- user_id: int
- ifOccupied: bool

#### 外部功能

学校选择器: https://developers.weixin.qq.com/community/develop/article/doc/0002e4f1780e20fa130d0e65756c13