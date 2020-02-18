import service from '@/utils/request'
/**
 * 获取验证码
 */
export function GetSms(data){
  return service.request({
    method: "post",
    url: "/getSms/",
    data
    // 左边data是变量名，右边data是参数名，参数名和变量名相同，可止写成一个
  })
}
 
/**
* 获取用户角色
*/

/**
 * 登陆
 */

/**
* 注册
*/