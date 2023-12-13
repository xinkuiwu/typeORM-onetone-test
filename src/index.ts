import {AppDataSource} from "./data-source"
import {User} from "./entity/User"
import {IdCard} from "./entity/IdCard";

AppDataSource.initialize().then(async () => {
  /**
   * 创建
    */

  // const user = new User()
  // user.firstName = 'wu'
  // user.lastName = 'xinkui'
  // user.age = 21
  //
  // const idCard = new IdCard()
  // idCard.cardName = '11111'
  // idCard.user = user

  // await AppDataSource.manager.save(user)
  // await AppDataSource.manager.save(idCard)
  /**
   * 查询
   */
// //     查询
//     const ics = await  AppDataSource.manager.find(IdCard,{
//         relations: {
//             user: true
//         }
//     })
//     console.log(ics)

  // query builder 方式查询
  // const ics = await AppDataSource.manager.getRepository(IdCard)
  //   .createQueryBuilder('ic')
  //   .leftJoinAndSelect('ic.user','u')
  //   .getMany()
  //
  // console.log(ics)

//      EntityManager 创建 queryBuilder 来连接查询
//   const ics = await AppDataSource.manager.createQueryBuilder(
//     IdCard, 'ic'
//   )
//     .leftJoinAndSelect('ic.user', 'u')
//     .getMany()
//   console.log(ics)

  /**
   * 修改
   */
  // const user = new User()
  // user.id = 1
  // user.firstName='wuwu'
  // user.lastName = 'xk'
  // user.age = 22
  //
  // const idCard = new IdCard()
  // idCard.id = 1
  // idCard.cardName = '2222'
  // idCard.user = user
  //
  // await AppDataSource.manager.save(idCard)

  /**
   * 删除
   */
  // 的 onDelete 是 cascade，所以只要删除了 user，那关联的 idCard 就会跟着被删除
  // await AppDataSource.manager.delete(User, 1)

//   如果没有级联，就需要手动删除
//   const idCard = await AppDataSource.manager.findOne(
//     IdCard,{
//       where: {
//         id: 2
//       },
//       relations: {
//         user: true
//       }
//       }
//     )
//   await AppDataSource.manager.delete(User, idCard.user.id)
//   await AppDataSource.manager.delete(IdCard, idCard.id)


  /**
   * 只是在 idCard 里访问 user，如果想在 user 里访问 idCard
   */
  const user = await AppDataSource.manager.find(User, {
    relations: {
      idCard: true
    }
  });
  console.log(user);

}).catch(error => console.log(error))
