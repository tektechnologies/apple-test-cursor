export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      access_requests: {
        Row: {
          created_at: string | null
          created_by: string | null
          facility_id: string | null
          form_data: Json | null
          form_version_id: string | null
          id: string
          initiated_by: string | null
          invitation_token: string | null
          notes: string | null
          policy_flags: Json | null
          status: string | null
          target_company: string | null
          target_email: string | null
          target_name: string | null
          target_phone: string | null
          updated_at: string | null
          user_id: string | null
          visit_date: string | null
          visit_dates: string[] | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          facility_id?: string | null
          form_data?: Json | null
          form_version_id?: string | null
          id?: string
          initiated_by?: string | null
          invitation_token?: string | null
          notes?: string | null
          policy_flags?: Json | null
          status?: string | null
          target_company?: string | null
          target_email?: string | null
          target_name?: string | null
          target_phone?: string | null
          updated_at?: string | null
          user_id?: string | null
          visit_date?: string | null
          visit_dates?: string[] | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          facility_id?: string | null
          form_data?: Json | null
          form_version_id?: string | null
          id?: string
          initiated_by?: string | null
          invitation_token?: string | null
          notes?: string | null
          policy_flags?: Json | null
          status?: string | null
          target_company?: string | null
          target_email?: string | null
          target_name?: string | null
          target_phone?: string | null
          updated_at?: string | null
          user_id?: string | null
          visit_date?: string | null
          visit_dates?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "access_requests_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "access_requests_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "access_requests_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "access_requests_form_version_id_fkey"
            columns: ["form_version_id"]
            isOneToOne: false
            referencedRelation: "form_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      camera_attrs: {
        Row: {
          created_at: string | null
          device_id: string | null
          door_id: string | null
          facility_id: string | null
          id: string
          meta: Json | null
          name: string
          orientation: string | null
          status: string | null
          stream_url: string | null
          updated_at: string | null
          vendor: string | null
          zone_id: string | null
        }
        Insert: {
          created_at?: string | null
          device_id?: string | null
          door_id?: string | null
          facility_id?: string | null
          id: string
          meta?: Json | null
          name: string
          orientation?: string | null
          status?: string | null
          stream_url?: string | null
          updated_at?: string | null
          vendor?: string | null
          zone_id?: string | null
        }
        Update: {
          created_at?: string | null
          device_id?: string | null
          door_id?: string | null
          facility_id?: string | null
          id?: string
          meta?: Json | null
          name?: string
          orientation?: string | null
          status?: string | null
          stream_url?: string | null
          updated_at?: string | null
          vendor?: string | null
          zone_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "camera_attrs_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "camera_attrs_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "camera_attrs_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
      client_forms: {
        Row: {
          company_id: string
          created_at: string
          current_version_id: string | null
          id: string
          is_active: boolean | null
          name: string
          template_id: string | null
          type: string
        }
        Insert: {
          company_id: string
          created_at?: string
          current_version_id?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          template_id?: string | null
          type: string
        }
        Update: {
          company_id?: string
          created_at?: string
          current_version_id?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          template_id?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_forms_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_forms_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "client_forms_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "client_forms_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "form_templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_client_forms_current_version"
            columns: ["current_version_id"]
            isOneToOne: false
            referencedRelation: "form_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      company_attrs: {
        Row: {
          created_at: string | null
          id: string
          legal_name: string | null
          logo_url: string | null
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          legal_name?: string | null
          logo_url?: string | null
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          legal_name?: string | null
          logo_url?: string | null
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_attrs_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_attrs_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "company_attrs_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
      company_email_domains: {
        Row: {
          company_id: string | null
          created_at: string | null
          domain: string
          id: string
          is_active: boolean | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          domain: string
          id?: string
          is_active?: boolean | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          domain?: string
          id?: string
          is_active?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "company_email_domains_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_email_domains_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "company_email_domains_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
      door_attrs: {
        Row: {
          controller_id: string | null
          created_at: string | null
          direction: string | null
          facility_id: string | null
          id: string
          meta: Json | null
          name: string
          status: string | null
          updated_at: string | null
          zone_a_id: string | null
          zone_b_id: string | null
        }
        Insert: {
          controller_id?: string | null
          created_at?: string | null
          direction?: string | null
          facility_id?: string | null
          id: string
          meta?: Json | null
          name: string
          status?: string | null
          updated_at?: string | null
          zone_a_id?: string | null
          zone_b_id?: string | null
        }
        Update: {
          controller_id?: string | null
          created_at?: string | null
          direction?: string | null
          facility_id?: string | null
          id?: string
          meta?: Json | null
          name?: string
          status?: string | null
          updated_at?: string | null
          zone_a_id?: string | null
          zone_b_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "door_attrs_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "door_attrs_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "door_attrs_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "door_attrs_zone_a_id_fkey"
            columns: ["zone_a_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "door_attrs_zone_a_id_fkey"
            columns: ["zone_a_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "door_attrs_zone_a_id_fkey"
            columns: ["zone_a_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "door_attrs_zone_b_id_fkey"
            columns: ["zone_b_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "door_attrs_zone_b_id_fkey"
            columns: ["zone_b_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "door_attrs_zone_b_id_fkey"
            columns: ["zone_b_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
      entities: {
        Row: {
          archived: boolean | null
          company_id: string | null
          created_at: string | null
          entity_type_id: string
          id: string
          meta: Json | null
          name: string
          parent_id: string | null
        }
        Insert: {
          archived?: boolean | null
          company_id?: string | null
          created_at?: string | null
          entity_type_id: string
          id?: string
          meta?: Json | null
          name: string
          parent_id?: string | null
        }
        Update: {
          archived?: boolean | null
          company_id?: string | null
          created_at?: string | null
          entity_type_id?: string
          id?: string
          meta?: Json | null
          name?: string
          parent_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "entities_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "entities_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "entities_entity_type_id_fkey"
            columns: ["entity_type_id"]
            isOneToOne: false
            referencedRelation: "entity_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "entities_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "entities_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
      entity_types: {
        Row: {
          created_at: string | null
          description: string | null
          display_order: number | null
          icon_name: string | null
          id: string
          type_code: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon_name?: string | null
          id?: string
          type_code: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon_name?: string | null
          id?: string
          type_code?: string
        }
        Relationships: []
      }
      external_refs: {
        Row: {
          created_at: string | null
          entity_id: string | null
          external_id: string
          id: string
          is_primary: boolean | null
          metadata: Json | null
          ref_type: string | null
          source_system: string
        }
        Insert: {
          created_at?: string | null
          entity_id?: string | null
          external_id: string
          id: string
          is_primary?: boolean | null
          metadata?: Json | null
          ref_type?: string | null
          source_system: string
        }
        Update: {
          created_at?: string | null
          entity_id?: string | null
          external_id?: string
          id?: string
          is_primary?: boolean | null
          metadata?: Json | null
          ref_type?: string | null
          source_system?: string
        }
        Relationships: [
          {
            foreignKeyName: "external_refs_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_refs_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "external_refs_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
      facility_attrs: {
        Row: {
          address: string | null
          created_at: string | null
          id: string
          lat: number
          lon: number
          meta: Json | null
          name: string
          risk_level: string | null
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          id: string
          lat: number
          lon: number
          meta?: Json | null
          name: string
          risk_level?: string | null
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          id?: string
          lat?: number
          lon?: number
          meta?: Json | null
          name?: string
          risk_level?: string | null
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      form_access_tokens: {
        Row: {
          created_at: string
          created_by: string | null
          expires_at: string
          id: string
          is_revoked: boolean
          last_used_at: string | null
          task_id: string
          token: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          expires_at: string
          id?: string
          is_revoked?: boolean
          last_used_at?: string | null
          task_id: string
          token: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          expires_at?: string
          id?: string
          is_revoked?: boolean
          last_used_at?: string | null
          task_id?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "form_access_tokens_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "form_access_tokens_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_with_names_v"
            referencedColumns: ["id"]
          },
        ]
      }
      form_submissions: {
        Row: {
          autosave_at: string | null
          created_at: string
          form_data: Json
          form_id: string
          id: string
          status: string
          submitted_at: string | null
          updated_at: string
          user_id: string
          version_id: number
        }
        Insert: {
          autosave_at?: string | null
          created_at?: string
          form_data?: Json
          form_id: string
          id?: string
          status?: string
          submitted_at?: string | null
          updated_at?: string
          user_id: string
          version_id: number
        }
        Update: {
          autosave_at?: string | null
          created_at?: string
          form_data?: Json
          form_id?: string
          id?: string
          status?: string
          submitted_at?: string | null
          updated_at?: string
          user_id?: string
          version_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "form_submissions_form_id_fkey"
            columns: ["form_id"]
            isOneToOne: false
            referencedRelation: "client_forms"
            referencedColumns: ["id"]
          },
        ]
      }
      form_templates: {
        Row: {
          created_at: string
          created_by: string
          id: string
          name: string
          type: string
        }
        Insert: {
          created_at?: string
          created_by: string
          id?: string
          name: string
          type: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: string
          name?: string
          type?: string
        }
        Relationships: []
      }
      form_type_mappings: {
        Row: {
          created_at: string | null
          form_type: string
          id: string
          is_default: boolean | null
          updated_at: string | null
          usage_context: string
        }
        Insert: {
          created_at?: string | null
          form_type: string
          id?: string
          is_default?: boolean | null
          updated_at?: string | null
          usage_context: string
        }
        Update: {
          created_at?: string | null
          form_type?: string
          id?: string
          is_default?: boolean | null
          updated_at?: string | null
          usage_context?: string
        }
        Relationships: []
      }
      form_versions: {
        Row: {
          client_form_id: string
          created_at: string
          id: string
          schema: Json
          version_number: number
        }
        Insert: {
          client_form_id: string
          created_at?: string
          id?: string
          schema: Json
          version_number: number
        }
        Update: {
          client_form_id?: string
          created_at?: string
          id?: string
          schema?: Json
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "form_versions_client_form_id_fkey"
            columns: ["client_form_id"]
            isOneToOne: false
            referencedRelation: "client_forms"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          channel: string
          created_at: string | null
          delivered_at: string | null
          error: string | null
          form_version_id: string | null
          id: string
          payload: Json | null
          sent_at: string | null
          status: string
          task_id: string | null
          template: string
          trigger_at: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          channel: string
          created_at?: string | null
          delivered_at?: string | null
          error?: string | null
          form_version_id?: string | null
          id?: string
          payload?: Json | null
          sent_at?: string | null
          status: string
          task_id?: string | null
          template: string
          trigger_at: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          channel?: string
          created_at?: string | null
          delivered_at?: string | null
          error?: string | null
          form_version_id?: string | null
          id?: string
          payload?: Json | null
          sent_at?: string | null
          status?: string
          task_id?: string | null
          template?: string
          trigger_at?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_form_version_id_fkey"
            columns: ["form_version_id"]
            isOneToOne: false
            referencedRelation: "form_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_with_names_v"
            referencedColumns: ["id"]
          },
        ]
      }
      phone_attrs: {
        Row: {
          app_version: string | null
          device_id: string
          id: string
          is_active: boolean | null
          last_seen_at: string | null
          manufacturer: string | null
          meta: Json | null
          model: string | null
          os: string
          os_version: string | null
          phone_number: string | null
          registered_at: string | null
        }
        Insert: {
          app_version?: string | null
          device_id: string
          id: string
          is_active?: boolean | null
          last_seen_at?: string | null
          manufacturer?: string | null
          meta?: Json | null
          model?: string | null
          os: string
          os_version?: string | null
          phone_number?: string | null
          registered_at?: string | null
        }
        Update: {
          app_version?: string | null
          device_id?: string
          id?: string
          is_active?: boolean | null
          last_seen_at?: string | null
          manufacturer?: string | null
          meta?: Json | null
          model?: string | null
          os?: string
          os_version?: string | null
          phone_number?: string | null
          registered_at?: string | null
        }
        Relationships: []
      }
      phone_user_map: {
        Row: {
          is_active: boolean | null
          linked_at: string | null
          phone_id: string
          user_id: string
        }
        Insert: {
          is_active?: boolean | null
          linked_at?: string | null
          phone_id: string
          user_id: string
        }
        Update: {
          is_active?: boolean | null
          linked_at?: string | null
          phone_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "phone_user_map_phone_id_fkey"
            columns: ["phone_id"]
            isOneToOne: false
            referencedRelation: "phone_attrs"
            referencedColumns: ["id"]
          },
        ]
      }
      risk_levels: {
        Row: {
          color: string
          company_id: string | null
          created_at: string | null
          description: string | null
          id: string
          is_global: boolean | null
          label: string
          level_index: number
        }
        Insert: {
          color: string
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_global?: boolean | null
          label: string
          level_index: number
        }
        Update: {
          color?: string
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_global?: boolean | null
          label?: string
          level_index?: number
        }
        Relationships: [
          {
            foreignKeyName: "risk_levels_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "risk_levels_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "risk_levels_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
      risk_library: {
        Row: {
          category: string | null
          category_id: string | null
          code: string
          company_id: string | null
          created_at: string | null
          id: string
          is_global: boolean | null
          label: string
          type: string | null
          type_id: string | null
        }
        Insert: {
          category?: string | null
          category_id?: string | null
          code: string
          company_id?: string | null
          created_at?: string | null
          id?: string
          is_global?: boolean | null
          label: string
          type?: string | null
          type_id?: string | null
        }
        Update: {
          category?: string | null
          category_id?: string | null
          code?: string
          company_id?: string | null
          created_at?: string | null
          id?: string
          is_global?: boolean | null
          label?: string
          type?: string | null
          type_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "risk_library_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "risk_library_category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "risk_library_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "risk_library_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "risk_library_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "risk_library_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "risk_library_type"
            referencedColumns: ["id"]
          },
        ]
      }
      risk_library_category: {
        Row: {
          company_id: string | null
          created_at: string
          description: string | null
          id: string
          is_global: boolean
          name: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_global?: boolean
          name: string
        }
        Update: {
          company_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_global?: boolean
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "risk_library_category_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "risk_library_category_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "risk_library_category_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
      risk_library_level_mappings: {
        Row: {
          action_flags: Json | null
          company_id: string | null
          created_at: string | null
          id: string
          is_global: boolean | null
          risk_level_id: string | null
          risk_library_id: string | null
        }
        Insert: {
          action_flags?: Json | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          is_global?: boolean | null
          risk_level_id?: string | null
          risk_library_id?: string | null
        }
        Update: {
          action_flags?: Json | null
          company_id?: string | null
          created_at?: string | null
          id?: string
          is_global?: boolean | null
          risk_level_id?: string | null
          risk_library_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "risk_library_level_mappings_risk_level_id_fkey"
            columns: ["risk_level_id"]
            isOneToOne: false
            referencedRelation: "risk_levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "risk_library_level_mappings_risk_library_id_fkey"
            columns: ["risk_library_id"]
            isOneToOne: false
            referencedRelation: "risk_library"
            referencedColumns: ["id"]
          },
        ]
      }
      risk_library_type: {
        Row: {
          company_id: string | null
          created_at: string
          description: string | null
          id: string
          is_global: boolean
          name: string
        }
        Insert: {
          company_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_global?: boolean
          name: string
        }
        Update: {
          company_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_global?: boolean
          name?: string
        }
        Relationships: []
      }
      risk_state: {
        Row: {
          company_id: string | null
          created_at: string | null
          entity_id: string
          expires_at: string | null
          risk_level_id: string | null
          risk_type: string
          scope: string | null
          score: number | null
          source_ts: string
          state_type: string | null
          updated_at: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          entity_id: string
          expires_at?: string | null
          risk_level_id?: string | null
          risk_type: string
          scope?: string | null
          score?: number | null
          source_ts: string
          state_type?: string | null
          updated_at?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          entity_id?: string
          expires_at?: string | null
          risk_level_id?: string | null
          risk_type?: string
          scope?: string | null
          score?: number | null
          source_ts?: string
          state_type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "risk_state_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "risk_state_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "risk_state_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "risk_state_risk_level_id_fkey"
            columns: ["risk_level_id"]
            isOneToOne: false
            referencedRelation: "risk_levels"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          description: string | null
          id: string
          name: string
        }
        Insert: {
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assigner_id: string | null
          blocked_by: string[] | null
          completed_at: string | null
          created_at: string | null
          due_at: string | null
          entity_id: string | null
          form_version_id: string | null
          id: string
          invitation_token: string | null
          parent_id: string | null
          parent_type: string | null
          payload: Json | null
          priority: string | null
          status: string | null
          subject_user_id: string | null
          task_type: string | null
          updated_at: string | null
        }
        Insert: {
          assigner_id?: string | null
          blocked_by?: string[] | null
          completed_at?: string | null
          created_at?: string | null
          due_at?: string | null
          entity_id?: string | null
          form_version_id?: string | null
          id?: string
          invitation_token?: string | null
          parent_id?: string | null
          parent_type?: string | null
          payload?: Json | null
          priority?: string | null
          status?: string | null
          subject_user_id?: string | null
          task_type?: string | null
          updated_at?: string | null
        }
        Update: {
          assigner_id?: string | null
          blocked_by?: string[] | null
          completed_at?: string | null
          created_at?: string | null
          due_at?: string | null
          entity_id?: string | null
          form_version_id?: string | null
          id?: string
          invitation_token?: string | null
          parent_id?: string | null
          parent_type?: string | null
          payload?: Json | null
          priority?: string | null
          status?: string | null
          subject_user_id?: string | null
          task_type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_subject_user_id"
            columns: ["subject_user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_subject_user_id"
            columns: ["subject_user_id"]
            isOneToOne: false
            referencedRelation: "visitor_dashboard_v"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "fk_subject_user_id"
            columns: ["subject_user_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tasks_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "tasks_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "tasks_form_version_id_fkey"
            columns: ["form_version_id"]
            isOneToOne: false
            referencedRelation: "form_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_invitation_token_fkey"
            columns: ["invitation_token"]
            isOneToOne: false
            referencedRelation: "user_invitations"
            referencedColumns: ["token"]
          },
          {
            foreignKeyName: "tasks_invitation_token_fkey"
            columns: ["invitation_token"]
            isOneToOne: false
            referencedRelation: "visitor_dashboard_v"
            referencedColumns: ["invitation_token"]
          },
        ]
      }
      user_associations: {
        Row: {
          company_id: string
          created_at: string
          facility_id: string | null
          id: string
          role: string
          user_id: string
          valid_from: string
          valid_to: string | null
        }
        Insert: {
          company_id: string
          created_at?: string
          facility_id?: string | null
          id?: string
          role: string
          user_id: string
          valid_from?: string
          valid_to?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string
          facility_id?: string | null
          id?: string
          role?: string
          user_id?: string
          valid_from?: string
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_associations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_associations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "user_associations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "user_associations_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_associations_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "user_associations_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
      user_invitations: {
        Row: {
          context: Json | null
          email: string
          expires_at: string
          id: string
          invited_by: string | null
          name: string | null
          phone: string | null
          role: string
          status: string
          token: string
          type: string | null
        }
        Insert: {
          context?: Json | null
          email: string
          expires_at: string
          id?: string
          invited_by?: string | null
          name?: string | null
          phone?: string | null
          role: string
          status?: string
          token: string
          type?: string | null
        }
        Update: {
          context?: Json | null
          email?: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          name?: string | null
          phone?: string | null
          role?: string
          status?: string
          token?: string
          type?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          company_id: string | null
          created_at: string | null
          default_company_id: string | null
          email: string
          full_name: string | null
          id: string
          onboarding_status:
            | Database["public"]["Enums"]["onboarding_status_enum"]
            | null
          phone: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          default_company_id?: string | null
          email: string
          full_name?: string | null
          id: string
          onboarding_status?:
            | Database["public"]["Enums"]["onboarding_status_enum"]
            | null
          phone?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          default_company_id?: string | null
          email?: string
          full_name?: string | null
          id?: string
          onboarding_status?:
            | Database["public"]["Enums"]["onboarding_status_enum"]
            | null
          phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_profiles_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user_profiles_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "fk_user_profiles_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "user_profiles_default_company_id_fkey"
            columns: ["default_company_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_profiles_default_company_id_fkey"
            columns: ["default_company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "user_profiles_default_company_id_fkey"
            columns: ["default_company_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
      user_roles: {
        Row: {
          assigned_at: string | null
          role_id: string
          user_id: string
        }
        Insert: {
          assigned_at?: string | null
          role_id: string
          user_id: string
        }
        Update: {
          assigned_at?: string | null
          role_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "visitor_dashboard_v"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["user_id"]
          },
        ]
      }
      vehicle_attrs: {
        Row: {
          color: string | null
          created_at: string | null
          id: string
          is_default: boolean | null
          make: string | null
          model: string | null
          plate: string | null
          type: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id: string
          is_default?: boolean | null
          make?: string | null
          model?: string | null
          plate?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string
          is_default?: boolean | null
          make?: string | null
          model?: string | null
          plate?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      zone_attrs: {
        Row: {
          created_at: string | null
          facility_id: string | null
          id: string
          meta: Json | null
          name: string
          polygon_geojson: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          facility_id?: string | null
          id: string
          meta?: Json | null
          name: string
          polygon_geojson?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          facility_id?: string | null
          id?: string
          meta?: Json | null
          name?: string
          polygon_geojson?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "zone_attrs_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "zone_attrs_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "zone_attrs_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
        ]
      }
    }
    Views: {
      tasks_with_names_v: {
        Row: {
          assigner_id: string | null
          blocked_by: string[] | null
          completed_at: string | null
          created_at: string | null
          due_at: string | null
          entity_id: string | null
          facility_name: string | null
          form_version_id: string | null
          id: string | null
          invitation_token: string | null
          parent_id: string | null
          parent_type: string | null
          payload: Json | null
          priority: string | null
          status: string | null
          subject_user_id: string | null
          task_type: string | null
          updated_at: string | null
          visitor_email: string | null
          visitor_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_subject_user_id"
            columns: ["subject_user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_subject_user_id"
            columns: ["subject_user_id"]
            isOneToOne: false
            referencedRelation: "visitor_dashboard_v"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "fk_subject_user_id"
            columns: ["subject_user_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tasks_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "entities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["host_company_id"]
          },
          {
            foreignKeyName: "tasks_entity_id_fkey"
            columns: ["entity_id"]
            isOneToOne: false
            referencedRelation: "visitor_summary"
            referencedColumns: ["primary_company_id"]
          },
          {
            foreignKeyName: "tasks_form_version_id_fkey"
            columns: ["form_version_id"]
            isOneToOne: false
            referencedRelation: "form_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_invitation_token_fkey"
            columns: ["invitation_token"]
            isOneToOne: false
            referencedRelation: "user_invitations"
            referencedColumns: ["token"]
          },
          {
            foreignKeyName: "tasks_invitation_token_fkey"
            columns: ["invitation_token"]
            isOneToOne: false
            referencedRelation: "visitor_dashboard_v"
            referencedColumns: ["invitation_token"]
          },
        ]
      }
      visitor_dashboard_v: {
        Row: {
          company_id: string | null
          email: string | null
          facility_ids: string[] | null
          facility_names: string[] | null
          has_company_wide_access: boolean | null
          id: string | null
          invitation_token: string | null
          name: string | null
          phone: string | null
          primary_company_name: string | null
          role: string | null
          state: string | null
          user_id: string | null
          valid_from: string | null
          valid_to: string | null
          visitor_status: string | null
        }
        Relationships: []
      }
      visitor_summary: {
        Row: {
          email: string | null
          facility_ids: string[] | null
          facility_names: string[] | null
          first_granted: string | null
          full_name: string | null
          has_company_wide_access: boolean | null
          host_company_id: string | null
          host_company_name: string | null
          last_expires: string | null
          phone: string | null
          primary_company_id: string | null
          primary_company_name: string | null
          role: string | null
          status: string | null
          user_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      can_access_form_version: {
        Args: { form_version_id_param: string; user_id_param?: string }
        Returns: boolean
      }
      check_company_admin_status: {
        Args: { check_user_id: string; check_company_id: string }
        Returns: boolean
      }
      check_duplicate_access_request: {
        Args: { p_email: string; p_facility_id: string; p_visit_date: string }
        Returns: boolean
      }
      cleanup_expired_form_tokens: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      companies_i_admin: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      count_doors_by_facility: {
        Args: { facility_ids: string[] }
        Returns: {
          facility_id: string
          count: number
        }[]
      }
      count_zones_by_facility: {
        Args: { facility_ids: string[] }
        Returns: {
          facility_id: string
          count: number
        }[]
      }
      create_access_request: {
        Args: {
          target_name: string
          target_email: string
          target_phone: string
          target_company: string
          facility_id: string
          visit_date: string
          initiated_by?: string
        }
        Returns: Json
      }
      create_phone_entity: {
        Args:
          | {
              name: string
              company_id: string
              device_id: string
              phone_number: string
              os: string
              model: string
              manufacturer: string
            }
          | {
              name: string
              company_id: string
              phone_number: string
              assigned_user_id: string
              os_type: string
              device_id: string
              is_global?: boolean
            }
        Returns: string
      }
      create_user_profile: {
        Args: { p_email: string; p_full_name: string; p_company_id: string }
        Returns: string
      }
      create_vehicle_entity: {
        Args: {
          name: string
          company_id: string
          license_plate: string
          vin: string
          assigned_company_id: string
          gps_enabled?: boolean
        }
        Returns: string
      }
      execute_query: {
        Args: { query_text: string }
        Returns: Json[]
      }
      execute_safe_query: {
        Args: { query_text: string; query_params?: Json }
        Returns: Json[]
      }
      facilities_i_admin: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      fix_form_consistency: {
        Args: Record<PropertyKey, never>
        Returns: {
          fixed_forms_count: number
          orphaned_versions_count: number
        }[]
      }
      get_admin_companies: {
        Args: { user_id_param: string }
        Returns: string[]
      }
      get_admin_invitations: {
        Args: Record<PropertyKey, never>
        Returns: {
          context: Json | null
          email: string
          expires_at: string
          id: string
          invited_by: string | null
          name: string | null
          phone: string | null
          role: string
          status: string
          token: string
          type: string | null
        }[]
      }
      get_companies_list: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: string
          name: string
          legal_name: string
        }[]
      }
      get_company_email_domains: {
        Args: { company_id_param: string }
        Returns: {
          id: string
          company_id: string
          domain: string
          is_active: boolean
          created_at: string
        }[]
      }
      get_company_user_associations: {
        Args: { company_id_param: string }
        Returns: {
          id: string
          user_id: string
          company_id: string
          facility_id: string
          role: string
          valid_from: string
          valid_to: string
          created_at: string
          user_email: string
          user_name: string
          facility_name: string
        }[]
      }
      get_entity_type_id: {
        Args: { type_code_param: string }
        Returns: string
      }
      get_entity_type_id_by_code: {
        Args: { type_code_param: string }
        Returns: string
      }
      get_facilities_by_company: {
        Args: { company_id_param?: string }
        Returns: {
          id: string
          name: string
          company_id: string
          company_name: string
        }[]
      }
      get_facilities_count: {
        Args: { company_id_param: string }
        Returns: number
      }
      get_facility_attrs_by_ids: {
        Args: { facility_ids: string[] }
        Returns: {
          id: string
          address: string
          lat: number
          lon: number
          risk_level: string
        }[]
      }
      get_facility_entity_type_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_public_invitation_by_token: {
        Args: { token_param: string }
        Returns: {
          name: string
          email: string
          role: string
          status: string
          expires_at: string
          context: Json
        }[]
      }
      get_user_access_requests: {
        Args: {
          tab_filter?: string
          facility_filter?: string
          search_filter?: string
          start_date_filter?: string
          end_date_filter?: string
          status_filter?: string
        }
        Returns: {
          id: string
          target_name: string
          target_email: string
          target_phone: string
          facility_id: string
          facility_name: string
          visit_date: string
          status: string
          form_data: Json
          form_version_id: string
          user_id: string
          admin_task_id: string
          user_task_id: string
          admin_task_status: string
          user_task_status: string
        }[]
      }
      get_user_accessible_companies: {
        Args: { user_id_param: string }
        Returns: string[]
      }
      get_user_associations_count: {
        Args: { company_id_param: string }
        Returns: number
      }
      get_user_companies_safe: {
        Args: { user_id_param?: string }
        Returns: {
          id: string
          name: string
          legal_name: string
          user_role: string
        }[]
      }
      get_user_company: {
        Args: { user_id: string }
        Returns: string
      }
      get_user_profile_safe: {
        Args: { user_id_param?: string }
        Returns: {
          id: string
          email: string
          full_name: string
          phone: string
          default_company_id: string
        }[]
      }
      get_user_role: {
        Args: { user_id: string }
        Returns: string
      }
      get_user_roles: {
        Args: { user_id: string }
        Returns: {
          role_name: string
          role_id: string
        }[]
      }
      get_visit_calendar_data: {
        Args: {
          start_date_param: string
          end_date_param: string
          company_id_param: string
          facility_ids_param?: string[]
          status_param?: string
          search_param?: string
        }
        Returns: {
          id: string
          target_name: string
          target_email: string
          facility_id: string
          facility_name: string
          visit_date: string
          status: string
          form_data: Json
          form_version_id: string
          tasks: Json
        }[]
      }
      get_visitors_by_company: {
        Args: { company_id_param: string }
        Returns: {
          id: string
          name: string
          email: string
          role: string
          primary_company_name: string
          visitor_status: string
          valid_until: string
          has_company_wide_access: boolean
          facility_ids: string[]
          facility_names: string[]
          state: string
          invitation_token: string
          host_company_id: string
          host_company_name: string
        }[]
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      has_role: {
        Args: { user_id: string; role_name: string }
        Returns: boolean
      }
      is_company_admin: {
        Args: { user_id_param: string; company_id_param: string }
        Returns: boolean
      }
      is_company_admin_check: {
        Args: { company_id_param: string }
        Returns: boolean
      }
      is_domain_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_global_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_user_global_admin: {
        Args: { user_id_param: string }
        Returns: boolean
      }
      resend_invitation: {
        Args: { token: string }
        Returns: {
          context: Json | null
          email: string
          expires_at: string
          id: string
          invited_by: string | null
          name: string | null
          phone: string | null
          role: string
          status: string
          token: string
          type: string | null
        }[]
      }
      revoke_invitation: {
        Args: { token: string }
        Returns: {
          context: Json | null
          email: string
          expires_at: string
          id: string
          invited_by: string | null
          name: string | null
          phone: string | null
          role: string
          status: string
          token: string
          type: string | null
        }[]
      }
      revoke_user_access: {
        Args: { association_id: string }
        Returns: undefined
      }
      search_users: {
        Args: { search_query: string }
        Returns: {
          id: string
          full_name: string
          email: string
          phone: string
          company: string
          user_type: string
        }[]
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
      user_can_access_form: {
        Args: { form_version_id_param: string }
        Returns: boolean
      }
      user_can_view_access_request: {
        Args: { request_id: string }
        Returns: boolean
      }
      user_exists_safe: {
        Args: { email_param: string }
        Returns: boolean
      }
      user_has_company_access: {
        Args: { user_id_param: string; company_id_param: string }
        Returns: boolean
      }
      user_has_facility_access: {
        Args: { user_id_param: string; facility_id_param: string }
        Returns: boolean
      }
      user_has_visitor_access: {
        Args: { user_id_param: string; company_id_param: string }
        Returns: boolean
      }
      user_is_global_admin: {
        Args: { user_id_param: string }
        Returns: boolean
      }
      validate_form_schema: {
        Args: { form_version_id_param: string }
        Returns: boolean
      }
    }
    Enums: {
      onboarding_status_enum: "invited" | "auto-matched" | "unassociated"
      user_role_enum: "global_admin" | "company_admin" | "standard"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      onboarding_status_enum: ["invited", "auto-matched", "unassociated"],
      user_role_enum: ["global_admin", "company_admin", "standard"],
    },
  },
} as const
