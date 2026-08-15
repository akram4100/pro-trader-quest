export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          description: string
          icon: string
          key: string
          title: string
          xp_reward: number
        }
        Insert: {
          description: string
          icon?: string
          key: string
          title: string
          xp_reward?: number
        }
        Update: {
          description?: string
          icon?: string
          key?: string
          title?: string
          xp_reward?: number
        }
        Relationships: []
      }
      journal_entries: {
        Row: {
          asset: string
          created_at: string
          direction: string
          emotion: string | null
          entry_price: number
          entry_reason: string | null
          followed_plan: boolean
          id: string
          market: string
          mistakes: string | null
          notes: string | null
          pnl: number | null
          position_size: number | null
          r_multiple: number | null
          result: string
          risk_percent: number | null
          screenshot_url: string | null
          stop_loss: number
          strategy: string | null
          take_profit: number | null
          trade_date: string
          updated_at: string
          user_id: string
        }
        Insert: {
          asset: string
          created_at?: string
          direction?: string
          emotion?: string | null
          entry_price: number
          entry_reason?: string | null
          followed_plan?: boolean
          id?: string
          market?: string
          mistakes?: string | null
          notes?: string | null
          pnl?: number | null
          position_size?: number | null
          r_multiple?: number | null
          result?: string
          risk_percent?: number | null
          screenshot_url?: string | null
          stop_loss: number
          strategy?: string | null
          take_profit?: number | null
          trade_date?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          asset?: string
          created_at?: string
          direction?: string
          emotion?: string | null
          entry_price?: number
          entry_reason?: string | null
          followed_plan?: boolean
          id?: string
          market?: string
          mistakes?: string | null
          notes?: string | null
          pnl?: number | null
          position_size?: number | null
          r_multiple?: number | null
          result?: string
          risk_percent?: number | null
          screenshot_url?: string | null
          stop_loss?: number
          strategy?: string | null
          take_profit?: number | null
          trade_date?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      lesson_progress: {
        Row: {
          completed_at: string
          course_slug: string
          id: string
          lesson_slug: string
          score: number
          status: string
          total: number
          user_id: string
          xp_earned: number
        }
        Insert: {
          completed_at?: string
          course_slug: string
          id?: string
          lesson_slug: string
          score?: number
          status?: string
          total?: number
          user_id: string
          xp_earned?: number
        }
        Update: {
          completed_at?: string
          course_slug?: string
          id?: string
          lesson_slug?: string
          score?: number
          status?: string
          total?: number
          user_id?: string
          xp_earned?: number
        }
        Relationships: []
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string
          id: string
          read: boolean
          title: string
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          read?: boolean
          title: string
          user_id: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          read?: boolean
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      practice_sessions: {
        Row: {
          created_at: string
          id: string
          kind: string
          meta: Json
          score: number
          skill_key: string | null
          total: number
          user_id: string
          xp_earned: number
        }
        Insert: {
          created_at?: string
          id?: string
          kind: string
          meta?: Json
          score?: number
          skill_key?: string | null
          total?: number
          user_id: string
          xp_earned?: number
        }
        Update: {
          created_at?: string
          id?: string
          kind?: string
          meta?: Json
          score?: number
          skill_key?: string | null
          total?: number
          user_id?: string
          xp_earned?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string
          id: string
          last_active_date: string | null
          level: number
          onboarding_done: boolean
          streak_days: number
          theme: string
          updated_at: string
          xp: number
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string
          id: string
          last_active_date?: string | null
          level?: number
          onboarding_done?: boolean
          streak_days?: number
          theme?: string
          updated_at?: string
          xp?: number
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string
          id?: string
          last_active_date?: string | null
          level?: number
          onboarding_done?: boolean
          streak_days?: number
          theme?: string
          updated_at?: string
          xp?: number
        }
        Relationships: []
      }
      quiz_answers: {
        Row: {
          answer: Json | null
          attempt_id: string
          created_at: string
          id: string
          is_correct: boolean
          question_id: string
          skill_key: string | null
          user_id: string
        }
        Insert: {
          answer?: Json | null
          attempt_id: string
          created_at?: string
          id?: string
          is_correct?: boolean
          question_id: string
          skill_key?: string | null
          user_id: string
        }
        Update: {
          answer?: Json | null
          attempt_id?: string
          created_at?: string
          id?: string
          is_correct?: boolean
          question_id?: string
          skill_key?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_answers_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "quiz_attempts"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_attempts: {
        Row: {
          created_at: string
          id: string
          lesson_slug: string | null
          quiz_kind: string
          score: number
          total: number
          user_id: string
          xp_earned: number
        }
        Insert: {
          created_at?: string
          id?: string
          lesson_slug?: string | null
          quiz_kind?: string
          score?: number
          total?: number
          user_id: string
          xp_earned?: number
        }
        Update: {
          created_at?: string
          id?: string
          lesson_slug?: string | null
          quiz_kind?: string
          score?: number
          total?: number
          user_id?: string
          xp_earned?: number
        }
        Relationships: []
      }
      strategies: {
        Row: {
          created_at: string
          entry_rules: string | null
          id: string
          invalidation: string | null
          market: string
          name: string
          notes: string | null
          risk_percent: number
          stop_rules: string | null
          target_rules: string | null
          timeframe: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          entry_rules?: string | null
          id?: string
          invalidation?: string | null
          market?: string
          name: string
          notes?: string | null
          risk_percent?: number
          stop_rules?: string | null
          target_rules?: string | null
          timeframe?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          entry_rules?: string | null
          id?: string
          invalidation?: string | null
          market?: string
          name?: string
          notes?: string | null
          risk_percent?: number
          stop_rules?: string | null
          target_rules?: string | null
          timeframe?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      strategy_rules: {
        Row: {
          content: string
          id: string
          order_index: number
          rule_type: string
          strategy_id: string
          user_id: string
        }
        Insert: {
          content: string
          id?: string
          order_index?: number
          rule_type?: string
          strategy_id: string
          user_id: string
        }
        Update: {
          content?: string
          id?: string
          order_index?: number
          rule_type?: string
          strategy_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "strategy_rules_strategy_id_fkey"
            columns: ["strategy_id"]
            isOneToOne: false
            referencedRelation: "strategies"
            referencedColumns: ["id"]
          },
        ]
      }
      user_achievements: {
        Row: {
          achievement_key: string
          earned_at: string
          id: string
          user_id: string
        }
        Insert: {
          achievement_key: string
          earned_at?: string
          id?: string
          user_id: string
        }
        Update: {
          achievement_key?: string
          earned_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_key_fkey"
            columns: ["achievement_key"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["key"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_skills: {
        Row: {
          attempts: number
          correct: number
          id: string
          score: number
          skill_key: string
          updated_at: string
          user_id: string
        }
        Insert: {
          attempts?: number
          correct?: number
          id?: string
          score?: number
          skill_key: string
          updated_at?: string
          user_id: string
        }
        Update: {
          attempts?: number
          correct?: number
          id?: string
          score?: number
          skill_key?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
