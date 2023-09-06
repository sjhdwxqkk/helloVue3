/**
 * @description 创建数组的4种方法
 * @author  
 * @export 
 * @param {} 
 * @return {} 
 */

// 1. 字面量定义
let arr1 = []

// 2. 使用Array的构造函数
let arr2 = new Array(); // 无参空数组
let arr2_1 = new Array(22); // 指定数组长度为22
let arr2_2 = new Array('1','ac','b') // 非数值的参数

// 3. Array.of(ES6)
let arr3 = Array.of()

// 4. Array.from(ES6)
let arr4 = Array.from()

/**
 * @description 数组的方法
 * @author  
 * @export 
 * @param {} 
 * @return {} 
 */
// 1. join 使用指定分隔符将数组拼接为一个字符串
// 2. push 向数组末尾添加新元素
// 3. pop 删除数组的最后一项
// 4. shift 删除数组的第一项
// 5. unshift 向数组首位添加新元素
// 6. slice 按条件查找出其中部分元素
// 7. splice 对数组进行增删改
// 8. fill 能使用特定值填充数组中的一个或多个元素
// 9. filter 过滤

// 1. join 可以是数组变成字符串，可以添加字符串之间的连接符
function repeatString(str, n) {
    return new Array(n + 1).join(str)
}

repeatString('abc', 3) // abcabcabc

// 2. push 向数组末尾添加新元素

