import { Router } from "express";

import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import settingRoutes from "./settingRoutes";
import contactRoutes from "./contactRoutes";
import ticketRoutes from "./ticketRoutes";
import whatsappRoutes from "./whatsappRoutes";
import messageRoutes from "./messageRoutes";
import whatsappSessionRoutes from "./whatsappSessionRoutes";
import queueRoutes from "./queueRoutes";
import companyRoutes from "./companyRoutes";
import planRoutes from "./planRoutes";
import ticketNoteRoutes from "./ticketNoteRoutes";
import quickMessageRoutes from "./quickMessageRoutes";
import helpRoutes from "./helpRoutes";
import dashboardRoutes from "./dashboardRoutes";
import queueOptionRoutes from "./queueOptionRoutes";
import scheduleRoutes from "./scheduleRoutes";
import tagRoutes from "./tagRoutes";
import contactListRoutes from "./contactListRoutes";
import contactListItemRoutes from "./contactListItemRoutes";
import campaignRoutes from "./campaignRoutes";
import campaignSettingRoutes from "./campaignSettingRoutes";
import announcementRoutes from "./announcementRoutes";
import chatRoutes from "./chatRoutes";
import invoiceRoutes from "./invoicesRoutes";
import subscriptionRoutes from "./subScriptionRoutes";
import ticketTagRoutes from "./ticketTagRoutes";
import filesRoutes from "./filesRoutes";
import promptRoutes from "./promptRouter";
import queueIntegrationRoutes from "./queueIntegrationRoutes";
import emailRoute from "./emailRoute"; //Email
import forgotsRoutes from "./forgotPasswordRoutes"; // Reset Passwd
const routes = Router();

routes.use(userRoutes);
routes.use("/auth", authRoutes);
routes.use(settingRoutes);
routes.use(contactRoutes);
routes.use(ticketRoutes);
routes.use(whatsappRoutes);
routes.use(messageRoutes);
routes.use(messageRoutes);
routes.use(whatsappSessionRoutes);
routes.use(queueRoutes);
routes.use(companyRoutes);
routes.use(planRoutes);
routes.use(ticketNoteRoutes);
routes.use(quickMessageRoutes);
routes.use(helpRoutes);
routes.use(dashboardRoutes);
routes.use(queueOptionRoutes);
routes.use(scheduleRoutes);
routes.use(tagRoutes);
routes.use(contactListRoutes);
routes.use(contactListItemRoutes);
routes.use(campaignRoutes);
routes.use(campaignSettingRoutes);
routes.use(announcementRoutes);
routes.use(chatRoutes);
routes.use(subscriptionRoutes);
routes.use(invoiceRoutes);
routes.use(ticketTagRoutes);
routes.use(filesRoutes);
routes.use(promptRoutes);
routes.use(queueIntegrationRoutes);
routes.use(emailRoute); //Email
routes.use(forgotsRoutes);// Reset Passwd

export default routes;
