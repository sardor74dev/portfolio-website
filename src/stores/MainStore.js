import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";

export const useMainStore = defineStore("MainStore", () => {

    const projects = reactive([])
    const techStackIcons = reactive([])
    const contacts = reactive([])
    const socialMediaIcons = reactive([])

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`https://9837b02b6a10eb76.mokky.dev/projects`);
            projects.splice(0, projects.length, ...response.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    }

    const fetchTechStackIcons = async () => {
        try {
            const response = await axios.get(`https://9837b02b6a10eb76.mokky.dev/tech-stack-icons`);
            techStackIcons.splice(0, techStackIcons.length, ...response.data);
        } catch (error) {
            console.error("Error fetching tech stack icons:", error);
        }
    }

    const fetchContacts = async () => {
        try {
            const response = await axios.get(`https://9837b02b6a10eb76.mokky.dev/contacts`);
            contacts.splice(0, contacts.length, ...response.data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    }

    const fetchSocialMediaIcons = async () => {
        try {
            const response = await axios.get(`https://9837b02b6a10eb76.mokky.dev/social-media-icons`);
            socialMediaIcons.splice(0, socialMediaIcons.length, ...response.data);
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