import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import { adminJsResources } from './resources'
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticateOptions } from "./authenticate";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  locale: locale,
  resources: adminJsResources,
  branding: brandingOptions,
  dashboard: dashboardOptions
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
	adminJs, 
	authenticateOptions,
	null, 
	{
	resave: false,
	saveUninitialized: false
	}
)