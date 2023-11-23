import { Course } from "../models"

export const courseService = {
    findByIdWithEpisodes:async (id:string) => {
        const courseWithEpisodes = await Course.findByPk(id, {
        attributes: [
            "id",
            "name",
            "synopsis",
            ['thumbnail_url', 'thumbailUrl']
        ],
        include: {
            association: "Episodes",
            attributes: [
                "id",
                "name",
                "synopsis",
                "order",
                ["video_url", "videoUrl"],
                ["seconds_long", "secodsLong"]
            ],
            order: [["order", "ASC"]],
            separate: true
            }
        })

        return courseWithEpisodes
    }
}