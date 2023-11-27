import { DataTypes, Model } from "sequelize";
import { CourseInstance } from "./Course";
import { UserInstance } from "./User";
import { sequelize } from "../database";

export interface Favorite {
    userId: number,
    courseId: number,
}

export interface FavoriteInstace extends Model<Favorite>, Favorite {
    Course?: CourseInstance
    User?: UserInstance
}

export const Favorite = sequelize.define<FavoriteInstace, Favorite>('Favorite', {
    userId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    courseId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
            model: 'courses',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
})