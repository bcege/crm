import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, ClipboardList, FileText, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

const stats = [
  { title: "Всего учеников", value: "24", icon: Users, change: "+3" },
  { title: "Занятий на неделе", value: "18", icon: Calendar, change: "+2" },
  { title: "Тем в плане", value: "42", icon: ClipboardList, change: "85%" },
]

const newApplications = [
  { id: 1, name: "Козлова Анна", formUrl: "/applications/1" },
  { id: 2, name: "Морозов Никита", formUrl: "/applications/2" },
  { id: 3, name: "Белова Екатерина", formUrl: "/applications/3" },
]

const courseProgress = {
  ege: { course: "ЕГЭ", lastTopic: "27 задание — Сочинение" },
  oge: { course: "ОГЭ", lastTopic: "6 задание — Орфография" },
}

const upcomingLessons = [
  { name: "Иванов Алексей", course: "ЕГЭ", topic: "9 задание", nextLesson: "Сегодня, 15:00" },
  { name: "Петрова Мария", course: "ОГЭ", topic: "6 задание", nextLesson: "Завтра, 10:00" },
  { name: "Сидоров Дмитрий", course: "ЕГЭ", topic: "27 задание", nextLesson: "Завтра, 14:00" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Дашборд</h1>
          <p className="mt-1 text-muted-foreground">CRM БчЕГЭ</p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <span className="inline-block mt-1 rounded bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  {stat.change}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {/* New Applications Widget */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Новые заявки</CardTitle>
              </div>
              <CardDescription>Заявки от потенциальных учеников</CardDescription>
            </CardHeader>
            <CardContent>
              {newApplications.length > 0 ? (
                <div className="space-y-3">
                  {newApplications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between rounded-lg bg-secondary p-3">
                      <span className="font-medium">{application.name}</span>
                      <Link
                        href={application.formUrl}
                        className="flex items-center gap-1 rounded bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
                      >
                        Открыть
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">Новых заявок нет</p>
              )}
            </CardContent>
          </Card>

          {/* Course Progress Widget */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <CardTitle>Прогресс по курсам</CardTitle>
              </div>
              <CardDescription>Последние пройденные темы</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-secondary p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                      {courseProgress.ege.course}
                    </span>
                  </div>
                  <p className="font-medium">{courseProgress.ege.lastTopic}</p>
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                      {courseProgress.oge.course}
                    </span>
                  </div>
                  <p className="font-medium">{courseProgress.oge.lastTopic}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Ближайшие занятия</CardTitle>
            <CardDescription>Следующие запланированные уроки</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingLessons.map((lesson) => (
                <div key={lesson.name} className="flex items-center justify-between rounded-lg bg-secondary p-4">
                  <div>
                    <p className="font-medium">{lesson.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {lesson.course} — {lesson.topic}
                    </p>
                  </div>
                  <span className="rounded bg-primary px-2 py-1 text-sm font-medium text-primary-foreground">
                    {lesson.nextLesson}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
