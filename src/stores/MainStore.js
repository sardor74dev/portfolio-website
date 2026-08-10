import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

export const useMainStore = defineStore("MainStore", () => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_HOST = import.meta.env.VITE_API_HOST;

    const projects = reactive([])
    const techStackIcons = reactive([])
    const contacts = reactive([])
    const socialMediaIcons = reactive([])

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`https://${API_KEY}.${API_HOST}/projects`);
            projects.push(...response.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    }

    const fetchTechStackIcons = async () => {
        try {
            const response = await axios.get(`https://${API_KEY}.${API_HOST}/tech-stack-icons`);
            techStackIcons.push(...response.data);
        } catch (error) {
            console.error("Error fetching tech stack icons:", error);
        }
    }

    const fetchContacts = async () => {
        try {
            const response = await axios.get(`https://${API_KEY}.${API_HOST}/contacts`);
            contacts.push(...response.data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    }

    const fetchSocialMediaIcons = async () => {
        try {
            const response = await axios.get(`https://${API_KEY}.${API_HOST}/social-media-icons`);
            socialMediaIcons.push(...response.data);
        } catch (error) {
            console.error("Error fetching social media icons:", error);
        }
    }

    return {
        projects,
        techStackIcons,
        contacts,
        socialMediaIcons,
        fetchProjects,
        fetchTechStackIcons,
        fetchContacts,
        fetchSocialMediaIcons
    }
})