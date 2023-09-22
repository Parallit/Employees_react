import { FC } from 'react';
import style from './ProfileUserInfo.module.scss';
import { User } from 'src/store/types.common';
import { AvatarIcon } from '../AvatarIcon';

interface CurrentUserProps {
  user: User | null;
}

export const ProfileUserInfo: FC<CurrentUserProps> = ({ user }) => {
  return (
    <>
      {user &&
        <div className={style.container}>
          <AvatarIcon name={user.avatar} width="80px" height="80px" />
          <div className={style.user_subordinates_box}>
            <div className={style.user_subordinates_amount}>
              {user.employeesId.length}
            </div>
            <h3 className={style.user_subordinates_title}>Subordinates</h3>
          </div>
          <div className={style.user_name}>{user?.firstName}</div>
          <div className={style.user_name}>{user?.lastName}</div>
          <div className={style.user_info_box}>
            <h3>Department:</h3>
            <p>
              {user?.department
                ? user.department
                : 'fill in the field Departament'}
            </p>
            <h3>Room:</h3>
            <p>{user?.room ? user.room : 'fill in the field Room'}</p>
            <h3>Phone number:</h3>
            <p>
              {user?.telephone ? user.telephone : 'fill in the field Telephone'}
            </p>
          </div>
          <div className={style.user_about_box}>
            <h3>About me:</h3>
            <p>
              &laquo;{user?.about ? user.about : 'fill in the field About'}&raquo;
            </p>
          </div>
        </div>
      }
    </>
  );
};















// import { FC } from 'react';
// import style from './ProfileUserInfo.module.scss';
// import { User } from 'src/store/types.common';
// import { AvatarIcon } from '../AvatarIcon';

// interface CurrentUserProps {
//   user: User | null;
// }

// export const ProfileUserInfo: FC<CurrentUserProps> = ({ user }) => {
//   return (
//     <>
//  { user &&
//     <div className={style.container}>
//     <AvatarIcon name={user.avatar} width="80px" height="80px" />
//     {/* <h2 className={style.title}>Your profile</h2> */}
//     <div className={style.user_subordinates_box}>
//       <div className={style.user_subordinates_amount}>
//         {user.employeesId.length}
//       </div>
//       <h3 className={style.user_subordinates_title}>Subordinates</h3>
//     </div>
//     <div className={style.user_name}>{user?.firstName}</div>
//     <div className={style.user_name}>{user?.lastName}</div>
//     <div className={style.user_info_box}>
//       <h3>Department:</h3>
//       <p>
//         {user?.department
//           ? user.department
//           : 'fill in the field Departament'}
//       </p>
//       <h3>Room:</h3>
//       <p>{user?.room ? user.room : 'fill in the field Room'}</p>
//       <h3>Phone number:</h3>
//       <p>
//         {user?.telephone ? user.telephone : 'fill in the field Telephone'}
//       </p>
//     </div>
//     <div className={style.user_about_box}>
//       <h3>About me:</h3>
//       <p>
//         &laquo;{user?.about ? user.about : 'fill in the field About'}&raquo;
//       </p>
//     </div>
//   </div>
//  }
//       <div className={style.container}>
//         <AvatarIcon name={user?.avatar} width="80px" height="80px" />
//         {/* <h2 className={style.title}>Your profile</h2> */}
//         <div className={style.user_subordinates_box}>
//           <div className={style.user_subordinates_amount}>
//             {user?.employeesId ? user.employeesId.length : 0}
//           </div>
//           <h3 className={style.user_subordinates_title}>Subordinates</h3>
//         </div>
//         <div className={style.user_name}>{user?.firstName}</div>
//         <div className={style.user_name}>{user?.lastName}</div>
//         <div className={style.user_info_box}>
//           <h3>Department:</h3>
//           <p>
//             {user?.department
//               ? user.department
//               : 'fill in the field Departament'}
//           </p>
//           <h3>Room:</h3>
//           <p>{user?.room ? user.room : 'fill in the field Room'}</p>
//           <h3>Phone number:</h3>
//           <p>
//             {user?.telephone ? user.telephone : 'fill in the field Telephone'}
//           </p>
//         </div>
//         <div className={style.user_about_box}>
//           <h3>About me:</h3>
//           <p>
//             &laquo;{user?.about ? user.about : 'fill in the field About'}&raquo;
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };
