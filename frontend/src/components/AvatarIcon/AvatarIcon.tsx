import { FC } from 'react'
import { IconComponent } from 'src/components/Icon'
import sprite from 'src/sprite.svg'

interface AvatarIconProps {
    name?: string,
    width: string,
    height: string,
    fill?: string,
    className?: string
}

export const AvatarIcon: FC<AvatarIconProps> = ({ name, width, height, fill, className }) => {
    return (
        <>
            {name ?
                <svg viewBox="0 0 61.8 61.809" width={width} height={height} fill={fill}>
                    <use href={`${sprite}#${name}`} color='white' />
                </svg>
                :
                <IconComponent type='user' width={width} height={height}  />
            }
        </>
    )
}